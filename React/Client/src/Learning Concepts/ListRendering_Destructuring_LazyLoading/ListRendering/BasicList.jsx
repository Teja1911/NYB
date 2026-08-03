

function BasicList() {
    const fruits=["Apple","Banana","Mango","Cherry","Orange"]
  return (
    <div>
        <h2>Fruits List</h2>
        {
            fruits.map((fruit,index)=>{
                <p key={index}>
                    {fruit}
                </p>
            })
        }
    </div>
  )
}

export default BasicList