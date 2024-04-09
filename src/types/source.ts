export interface DisplayDataProps {
    category: string,
    title: string,
    created: Date,
    updated: Date
}

export interface DisplayDataHeaders {
    text: string, 
    space: number
}

export interface PopperModalProps {
    open: HTMLElement | null,
    info: any,
    changeOpen: (e: any) => void
}

export interface TableCellsProps {
    info: {
        category: string,
        title: string,
        created: Date,
        updated: Date
    }
} 

export interface CreateSourceAttributes {
    title: string,
    description: string,
    num: number
}

export interface CreateSourceContents {
    title: string,
    sequence: number,
    textField: string
}

export interface CreateSourceInteractives {
    gallery: string,
    title: string,
    sequence: number,
    file: FileList | null
}