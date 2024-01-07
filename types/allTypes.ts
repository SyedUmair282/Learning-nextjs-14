export type navbarLinks={
    id:number,
    title:string,
    url:string
} 

export type themeCtx={
    mode: "dark"|"light",
    toggle: () => void
}