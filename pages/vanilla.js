function vanilla() {
    let array = new Array(200).fill(0)
    const data = array.map((i, key) =>
        <button variant="contained" key={key}>Hello World</button>
    )
    return data
}

export default vanilla;