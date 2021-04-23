const webApiUrl = "https://rpback.com/api/games";

export const service = {
    getBlocks,
    getMinutes,
    getCategories
};

async function getBlocks() {
    const options = {
        method: "GET",
    }
    const request = new Request(webApiUrl + "/test_blocks?project_id=2", options);
    const response = await fetch(request);
    return response.json();
}

async function getMinutes() {
    const options = {
        method: "GET",
    }
    const request = new Request(webApiUrl + "/test_minutes?project_id=2", options);
    const response = await fetch(request);
    return response.json();
}

async function getCategories() {
    const options = {
        method: "GET",
    }
    const request = new Request(webApiUrl + "/test_categories?project_id=2", options);
    const response = await fetch(request);
    return response.json();
}
