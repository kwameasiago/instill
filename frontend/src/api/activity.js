import instance from ".";

export const listActivity = (params) => {
    return instance.get(`/activity`, {params});
}

export const runSync = () => {
    return instance.get(`/activity/sync`);
}

