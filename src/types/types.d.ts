type StaffDetails = {
    name: string
    image: string
    rank: string
    programme: string
    email: string
    tel: string
    googleScholar?: string
    otherLinks?: {
        name: string,
        link: string
    }[],
    qualifications: string

}


type Media = {
    type: string
    url: string
    name: string
}