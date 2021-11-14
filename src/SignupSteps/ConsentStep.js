
export default function ConsentStep(
    { hasAgreed, updateHasAgreed }
    ) {
    
    function onUpdate(e) {
        console.log("onUpdate", hasAgreed, !hasAgreed);
        updateHasAgreed(!hasAgreed);
    }
    
    return (<div>
        <h1>
            Consent
        </h1>
        <label>
            <input
                name="isGoing"
                type="checkbox"
                defaultChecked={hasAgreed}
                onChange={onUpdate} />
            {" I accept the terms in the App Usage Agreement."}
        </label>
    </div>)
}
