export const isUserValid = user => undefined !== user &&
    undefined !== user.username &&
    undefined !== user.password &&
    undefined !== user.id

export const hasItems = items => undefined !== items  && items.length > 0