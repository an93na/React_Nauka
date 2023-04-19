import React from 'react'

export const StyleInLine = () => {
    const id = 'jakiś string'

    return (
        <article
            id={id}
            style={{
                color: 'red',
                textAlign: 'center',
                marginTop: "100px",
                paddingBottom: 100.
            }}>
                StyleInline
        </article>
    )
}