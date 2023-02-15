import CloneButton from "./Buttons/CloneButton";
import DelButton from "./Buttons/DelButton";
import SpinButton from "./Buttons/SpinButton";

function Sq({s, i, setSq}) {
    return (
        <div className={"sq" + (s.spin ? 'spin' : '')} style={{
            backgroundColor:s.color + '70',
            borderColor: s.color,
            }}>
                <DelButton classes='red small' sq={s} setSq={setSq}/>
                <CloneButton classes="small" sq={s} setSq={setSq}/>
                {i}
        </div>
    )
}

export default Sq;

                // <SpinButton classes="blue small" />