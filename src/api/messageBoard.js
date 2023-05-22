import { request, config } from "./setting";

const getComment = () =>
    request.get(`/`);

// const addComment = (petId) =>
//     request.get(`/api/petAreas/pets/${petId}/stayList`, config);

// const editComment = (petId) =>
//     request.get(`/api/petAreas/pets/${petId}/activityList`, config);

// const deleteComment = (petId) =>
//     request.get(`/api/petAreas/pets/${petId}/activityList`, config);

export {
    getComment
};