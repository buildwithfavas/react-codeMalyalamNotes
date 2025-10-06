import Label from "./Label";
import "./Listitem.css";

function ListItem(props) {
    const { title, descr, isActive } = props;
    return (
        <div className='list-item'>

            <div className='list-title'>
                <h4>{title}</h4>
            </div>
            <div className='list-descr'>
                {descr}
            </div>
            <br></br>
            <div className='list-label'>
                <Label onAction={()=>console.log("clicked")} isActive={isActive} />
            </div>

        </div>
    );
}

export default ListItem;