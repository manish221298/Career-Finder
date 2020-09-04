export const findResume = (resume, id) => {
    return resume.find(cv => cv._id === id)
}