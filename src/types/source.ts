export interface DisplayDataProps {
    id: string,
    category: string,
    title: string,
    created_time: Date,
    updated_time: Date
}

export interface PopperModalProps {
    open: HTMLElement | null,
    info: any,
    changeOpen: (e: any) => void,
    deleteText: string
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