const inputStyle = {
    fontSize: '16px',
    padding: '8px',
    width: '300px',
    margin: '10px 10px 20px'
}

const FirstNameInput = ({ firstName, setFirstName, placeholder = 'First name' }) => (
    <input
        type="text"
        style={inputStyle}
        value={firstName}
        placeholder={placeholder}
        onChange={e => setFirstName(e.target.value)}
    />
)

const LastNameInput = ({ lastName, setLastName, placeholder = 'Last name' }) => (
    <input
        type="text"
        style={inputStyle}
        value={lastName}
        placeholder={placeholder}
        onChange={e => setLastName(e.target.value)}
    />
)

const NameInput = ({ firstName, setFirstName, lastName, setLastName }) => (
    <div>
        <FirstNameInput firstName={firstName} setFirstName={setFirstName} />
        <LastNameInput lastName={lastName} setLastName={setLastName} />
    </div>
)

export { FirstNameInput, LastNameInput }
export default NameInput