export const enum URLs {
    baseURL = 'http://localhost:4200/',
}

export const enum Routes {
    heroes = 'heroes/'
}

export const urlInterpolation = (baseUrl: string, route: string) => {
    return baseUrl + route;
};
