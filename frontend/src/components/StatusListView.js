import StatusItem from './Status'

export default function StatusView(props) {
    return (
        <div>
            <ul>
                {props.StatusList.map(status => <StatusItem status={status} />)}
            </ul>
        </div>
    )
}