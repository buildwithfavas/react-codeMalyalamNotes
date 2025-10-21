import Label from "./Label";
import "./Listitem.css";
import { useTooltip } from "../Hooks/ourHooks";
import ToolTipCustomHook from "./Pages/ToolTipCustomHook"

function ListItem(props) {

    const {
        title,
        descr,
        isActive,
        onDelete,
        onLabelClick,
    } = props;

    const [showToolTip, setShowToolTip, labelRef, refObj] = useTooltip();

    return (
        <div className='list-item'>

            <div className='list-title'>
                <h4>{title}</h4>
                <label
                    onClick={onDelete} 
                    ref={labelRef}
                    onMouseEnter={()=> setShowToolTip(true)}
                    onMouseLeave={()=> setShowToolTip(false)}
                    >
                    Delete
                    <ToolTipCustomHook ref={refObj} showToolTip={showToolTip} message={`Delete this`} />
                </label>
            </div>
            <div className='list-descr'>
                {descr}
            </div>
            <br></br>
            <div className='list-label'>
                <Label isActive={isActive} onAction={onLabelClick} />
            </div>

        </div>
    );
}

export default ListItem;