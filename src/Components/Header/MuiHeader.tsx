import * as React from 'react';
import {useEffect} from 'react';
import {alpha, styled} from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import Badge from '@mui/material/Badge';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import {changeMode, ModeType} from "../../App/AppReducer";
import {useDispatch} from "react-redux";
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';
import {useMagSelector} from "../../App/store";
import {ItemsType} from "../../Api/MagAPI";
import {useDebounce} from "use-debounce";
import {getItemsTC, searchItemsTC} from "../../Features/ItemsAction";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import styledC from 'styled-components';
import {byeItem, searchItems} from '../../Features/ItemsReducer';

const headerStyle = {
    backgroundColor: 'rgba(0,217,255,0.58)',
}

const Search = styled('div')(({theme}) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(3),
        width: 'auto',
    },
}));

const SearchIconWrapper = styled('div')(({theme}) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({theme}) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '20ch',
        },
    },
}));

export default function MuiHeader() {
    const dispatch = useDispatch()
    const mode = useMagSelector<ModeType>(state => state.app.mode)
    const totalCost = useMagSelector<number>(state => state.items.byedItems.totalCoast)
    const itemsInBacket = useMagSelector<ItemsType[]>(state => state.items.byedItems.bItems)
    const search = useMagSelector<string>(state => state.items.search)
    const isLoad = useMagSelector<boolean>(state => state.app.isLoad)
    const debouncedSearch = useDebounce<string>(search, 1500)
    const [ds, ddss] = debouncedSearch

    const goTo = () => {
        if (mode === 'bye') {
            dispatch(changeMode({mode: 'order'}))
        } else if (mode === 'order') {
            dispatch(changeMode({mode: 'bye'}))
        } else if (mode === 'admin') {
            dispatch(changeMode({mode: 'bye'}))
        }
    }

    const goToAdm = () => {
        dispatch(changeMode({mode: 'admin'}))
    }
    const goToBack = () => {
        dispatch(changeMode({mode: 'bye'}))
    }

    useEffect(() => {
        if (search === '') {
            dispatch(getItemsTC())
        } else {
            dispatch(searchItemsTC(search))
        }
    }, [ds])

    useEffect(() => {
        let res = localStorage.getItem('itemsInBacket')

        if (res !== null) {
            let resultItems = JSON.parse(res)

            resultItems.forEach((i: ItemsType) => {
                dispatch(byeItem({item: i}))
            })
        }
    }, [dispatch])

    return (
        <Box sx={{flexGrow: 1}}>
            <AppBar position="static" style={headerStyle}>
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="open drawer"
                    >
                        <MenuIcon/>
                    </IconButton>
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{display: {xs: 'none', sm: 'block'}, fontFamily: 'Changa'}}
                    >
                        MY <span onClick={goToAdm}>TEST</span> MAG <span onClick={goToBack}>APP</span>
                    </Typography>
                    {mode === 'bye' && <Search>
                        <SearchIconWrapper>
                            <SearchIcon/>
                        </SearchIconWrapper>
                        <StyledInputBase
                            placeholder="Search…"
                            inputProps={{'aria-label': 'search'}}
                            value={search}
                            disabled={isLoad}
                            onChange={(e) => dispatch(searchItems({v: e.currentTarget.value}))}
                        />
                    </Search>}
                    {/*<CCase>{totalCost === 0 ? null : `${totalCost} $`}</CCase>*/}
                    <Box sx={{flexGrow: 1, textAlign: 'right', display: 'flex', alignItems: 'center', margin: '0 10px'}}
                         onClick={goTo}>
                        <CCase>{totalCost === 0 ? null : `${totalCost} $`}</CCase>
                        <IconButton size="large"
                                    edge="start"
                                    color="inherit"
                                    disabled={(itemsInBacket.length === 0 && mode !== 'order') || isLoad}>
                            <Badge badgeContent={itemsInBacket.length} color="error">
                                {mode === 'bye'
                                    ? <LocalGroceryStoreIcon/>
                                    : mode === 'order'
                                        ? <AddShoppingCartIcon/>
                                        : mode === 'admin'
                                            ? <LocalOfferIcon/>
                                            : ''}
                            </Badge>
                        </IconButton>
                    </Box>
                </Toolbar>
            </AppBar>
        </Box>
    );
}

export const CCase = styledC.div`
  margin: 0 10px 0 auto;
  width: 60px;
  font-size: 20px;
  color:white;
  background-color:rgba(115, 77, 230, 0.51);
  text-align: center;
  border-radius: 10px;
`