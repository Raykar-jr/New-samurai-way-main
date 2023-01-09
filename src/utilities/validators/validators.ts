
export const requiredField = (value: any) => {
    if (value) {
        return undefined
    }
    console.log('Field is required')
    return 'Field is required'
}

export const maxLengthCreator = (maxLength: number) => (value: any) => {
    if (value && value.length > maxLength) {
        return `Max length is ${maxLength} symbols`
    }
    return undefined
}