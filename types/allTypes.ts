export type navbarLinks={
    id:number,
    title:string,
    url:string
} 

export type themeCtx={
    mode: "dark"|"light",
    toggle: () => void
}

export type userInfo={
    username?:string,
    email?:string,
    password?:string
}

export type blogData={
    title:string,
    img:string,
    category:string,
    desc:string,
    detail:string,
}

export type blogsType={
    id:string,
    title:string,
    img:string,
    category:string,
    desc:string,
    detail:string,
    user_id: string,
    user_name: string
}