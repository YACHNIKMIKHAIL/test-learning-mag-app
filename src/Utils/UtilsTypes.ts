export type FielErrorType = { field: string, error: string }
export type ThunkErrorAPIConfigType = {
    rejectValue: { errors?: string[], fieldsErrors?: FielErrorType[] }
}