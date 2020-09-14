export const findInternship = (internship, ids) => {
    return internship.find(intern => intern._id === ids)
}