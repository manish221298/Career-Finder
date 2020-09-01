export const findCompany = (company, id) => {
    return company.find(cmp => cmp._id === id)
}