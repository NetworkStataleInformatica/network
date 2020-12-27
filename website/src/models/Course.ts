export default interface Website {
    link?:string,
    etichetta?:string
}

export default interface Course
{
    name?:string,
    anno?:number|string,
    semestre?:number,
    cfu?:number,
    gruppo?:string,
    websites:any[],
    faq?:string,
}