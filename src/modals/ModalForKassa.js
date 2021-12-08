import {Button, Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap';
// import {AvForm, AvField} from 'availity-reactstrap-validation'

function ModalForKassa({modalVis, toggle, getKassaName}) {

    function getKassaNameInModal(event) {
        event.preventDefault();
        if (event.target[0].value) {
            getKassaName(event.target[0].value)
            toggle();
        }
    }


    return <div>
        <Modal isOpen={modalVis} toggle={toggle}>
            <ModalHeader toggle={toggle}>Add new kassa</ModalHeader>
            <ModalBody>
{/* 
                <AvForm onSubmit={getKassaNameInModal} >
                    <AvField type={'text'} name={'name'}/>
                </AvForm> */}




            </ModalBody>
            <ModalFooter>
                <Button type={'submit'} form={'btn'} color="primary">save</Button>{' '}
                <Button color="secondary" className={'mx-3'} onClick={toggle}>cancel</Button>
            </ModalFooter>
        </Modal>
    </div>

}

export default ModalForKassa
