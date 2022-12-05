import model from "./model.js"

export const getAllEvents = () => model.find().sort({_id: -1});

export const createEvent = (event) =>
    model.create(event);

export const searchEventByKeywords = (keyword) =>
    model.find({$text: {$search:keyword}});


export const likeEvent = (uid,eid) =>
    model.updateOne({_id : eid},{$addToSet:{"likedBy" : uid}, $inc: { "likes": 1 }});

export const dislikeEvent = (uid,eid) =>
    model.updateOne({_id : eid},{$pull:{"likedBy" : uid}, $inc: { "likes": -1 }});




export const getTodayEvents = () => {
    let start = new Date();
    start.setHours(0,0,0,0);

    let end = new Date();
    end.setHours(23,59,59,999);
    return (
        model.find({dateOfEvent: {$gte: start, $lt: end}})
    )
}

export const getLatestPosts = () =>
    model.find().sort({_id: -1}).limit(4);

export const fetchEventById = (id) =>
    model.findById(id);

