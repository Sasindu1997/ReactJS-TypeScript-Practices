type containerProps = {
    styles: React.CSSProperties
}

export const StyledContainer = (props: containerProps) => {
    return <div style={props.styles}>Text content.</div>
}