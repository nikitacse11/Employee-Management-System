import Modal from '../modal/modal.jsx'
function Employees () {
    return (
        <div className="container ps-5 pt-4">
            {/* <div className="App">
                <Modal
                    show={showModal}
                    onClose={closeModal}
                    getData={getData}
                    editData={editData}
                >
                    <div className="container">
                        <h2>Modal Title</h2>
                        <p>This is the modal content.</p>
                    </div>
                </Modal>
                <DeleteModal
                    show={showDeleteModal}
                    onClose={closeDeleteModal}
                    getData={getData}
                    deleteData={deleteData}
                >
                    <div className="container">
                        <h2>Modal Title</h2>
                        <p>This is the modal content.</p>
                    </div>
                </DeleteModal>
            </div> */}
            <div className="employee_nav d-flex justify-content-between align-items-center py-3">
                <h4>Employees List</h4>
                <div className="nav_end">
                    <button
                        // onClick={openModal}
                        className="p-2 employee_btn border rounded-3 text-white"
                    >
                        Add Employee
                    </button>
                </div>
            </div>

            <table className="table table-hover">
                <thead>
                    <tr>
                        <th className="p-3">Name</th>
                        <th className="p-3">Email</th>
                        <th className="p-3">Phone</th>
                        <th className="p-3">Department</th>
                        <th className="p-3">Designation</th>
                        <th className="p-3">Salary</th>
                        <th className="p-3">Date of Joining</th>
                        <th className="p-3">Actions</th>
                    </tr>
                </thead>

                {/* <tbody>
                    {employees.length !== 0
                        ? employees?.map((item) => {
                              return (
                                  <tr key={item._id}>
                                      <td>{item.name}</td>
                                      <td>{item.email}</td>
                                      <td>{item.phone}</td>
                                      <td>{item.department}</td>
                                      <td>{item.designation}</td>
                                      <td>{item.salary}</td>
                                      <td>{item.date_of_joining}</td>
                                      <td>
                                          <img
                                              src={edit}
                                              alt=""
                                              className="p-2"
                                              onClick={() => {
                                                  openModal(item)
                                              }}
                                          />
                                          &nbsp;
                                          <img
                                              src={del}
                                              alt=""
                                              className="p-2"
                                              onClick={() => {
                                                  openDeleteModal(item._id)
                                              }}
                                          />
                                      </td>
                                  </tr>
                              )
                          })
                        : 'No record found'}
                </tbody> */}
            </table>
            {/* {employees.length !== 0 && (
                <PaginationComponent
                    totalPages={pagination.totalPages}
                    paginate={paginate}
                    currentPage={currentPage}
                />
            )} */}
        </div>
    )
}
export default Employees;