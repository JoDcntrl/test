export default interface InformationPageTypes {
    currentPage: string
    title: string
    cards: Card[]
}

interface Card {
    title: string
    text: string[]
}