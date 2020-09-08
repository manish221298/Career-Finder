export const findInternship = (internship, id) => {
    return internship.find(intern => intern._id === id)
}