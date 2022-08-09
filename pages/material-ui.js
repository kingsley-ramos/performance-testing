import Button from '@mui/material/Button';

function performanceReviewMaterialUI() {
    let array = new Array(200).fill(0)
    const data = array.map((i, key) =>
        <Button variant="contained" key={key}>Hello World</Button>
    )
    return data
}

export default performanceReviewMaterialUI;