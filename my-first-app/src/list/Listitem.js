import Label from "./Label";

function ListItem() {
    return (
        <div className='list-item'>
            <hr />
            <div className='list-title'>
                <h4>My Title One</h4>
            </div>
            <div className='list-descr'>
                This a very big description
            </div>
            <div className='list-label'>
                <Label />
                <Label />
                <Label />
                <Label />
            </div>
            <hr />
        </div>
    );
}

export default ListItem;