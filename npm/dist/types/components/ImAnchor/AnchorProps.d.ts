export interface AnchorData {
    id: string;
    text: string;
}
export interface AnchorProps {
    data?: Array<AnchorData>;
    offset?: number;
    target?: HTMLElement | string | null;
}
