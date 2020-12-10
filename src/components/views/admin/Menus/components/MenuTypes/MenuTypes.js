import React from "react";
import axios from "axios";
import PropTypes from "prop-types";
import { Alert, Button, Input } from "reactstrap";
import Modal from "src/components/common/Modal";
import DeleteModal from "./Delete";
import EditModal from "./Edit";
import { singleError } from "src/utils";

class MenuTypes extends React.Component {
  state = {
    menuName: 0,
    toEdit: {},
    toDelete: {},
    data: {
      objects: [],
    },
  };

  componentWillMount() {
    this.fetchMenuTypes();
  }

  fetchMenuTypes = () => {
    this.props.setLoading(true);
    axios
      .get("/menu")
      .then(({ data }) => {
        console.log(data, "fetchMenuTypes");
        // {
        //   "num_objects": 2,
        //   "objects": [
        //     {
        //       "id": 1,
        //       "category": 1,
        //       "created_at": "2020-04-30 13:00:32.257303",
        //       "updated_at": "2020-04-30 13:00:32.257303"
        //     },
        //     {
        //       "id": 2,
        //       "category": 1,
        //       "created_at": "2020-04-30 13:00:32.257303",
        //       "updated_at": "2020-04-30 13:00:32.257303"
        //     }
        //   ]
        // }
        this.setState({
          data: data,
        });
        this.props.setLoading(false);
      })
      .catch(({ response }) => {
        this.setState({
          ...this.state,
          error: response,
        });
        this.props.setLoading(false);
      });
  };

  onOpened = () => {
    this.setState({
      ...this.state,
      error: null,
    });
  };

  onDelete = (id) => {
    axios
      .delete(`/menu/${id}`)
      .then(({ data }) => {
        console.log(data, "deleted data");
        this.setState({
          ...this.state,
          deleteIsOpen: false,
          toDelete: id,
        });
        this.props.setLoading(false);
        this.fetchMenuTypes();
      })
      .catch(({ response }) => {
        this.setState({
          ...this.state,
          error: response,
        });
        this.props.setLoading(false);
      });
  };

  onEdit = (menu) => {
    this.setState({
      ...this.state,
      editIsOpen: true,
      toEdit: menu,
    });
  };

  toggleEdit = () => {
    this.setState({
      ...this.state,
      editIsOpen: !this.state.editIsOpen,
    });
  };

  toggleDelete = () => {
    this.setState({
      ...this.state,
      deleteIsOpen: !this.state.deleteIsOpen,
    });
  };

  onChange = (e) => {
    this.setState({
      ...this.state,
      [e.target.name]: e.target.value,
    });
  };

  onCreate = () => {
    this.props.setLoading(true);
    axios
      .post("/menu", { category: parseInt(this.state.menuName) })
      .then(({ data }) => {
        this.setState({
          ...this.state,
          error: null,
          menuName: 0,
        });
        this.props.setLoading(false);
        this.fetchMenuTypes();
      })
      .catch(({ response }) => {
        this.setState({
          ...this.state,
          error: response,
        });
        this.props.setLoading(false);
      });
  };

  render() {
    const { data, error } = this.state;
    const body = (
      <div>
        {error && (
          <Alert className="text-center text-small" color="danger">
            {singleError(error)}
          </Alert>
        )}
        <div className="container m-0 p-0">
          <div className="row m-0 p-0">
            <div className="col-4 text-right pr-1">
              <label className="pt-2">Create New:</label>
            </div>
            <div className="col-4 pr-1 pl-0">
              <Input
                name="menuName"
                value={this.state.menuName}
                onChange={this.onChange}
                placeholder="New Menu Name..."
                type="number"
              />
            </div>
            <div className="col-4 pl-0">
              <Button onClick={this.onCreate} color="secondary">
                Add
              </Button>
            </div>
          </div>
        </div>
        <div className="table-holder" style={{ maxHeight: "350px" }}>
          <table className="table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Category</th>
                <th>Edit</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {data.objects ? (
                data.objects.map((menu) => (
                  <tr key={menu.id}>
                    <td>{menu.id}</td>

                    {menu.category == 1 ? (
                      <td>Breakfast</td>
                    ) : menu.category == 2 ? (
                      <td>Lunch</td>
                    ) : (
                      <td>Supper</td>
                    )}
                    <td>
                      <button
                        onClick={() => this.onEdit(menu)}
                        className="edit-act"
                      >
                        Edit
                      </button>
                    </td>
                    <td>
                      <button
                        onClick={() => this.onDelete(menu.id)}
                        className="delete-act"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <p>"No Menus"</p>
              )}
            </tbody>
          </table>
        </div>
      </div>
    );

    const { isOpen, toggle } = this.props;
    const { toEdit, editIsOpen, toDelete, deleteIsOpen } = this.state;
    return (
      <div>
        <Modal
          size="lg"
          title="Manage Menus"
          body={body}
          isOpen={isOpen}
          toggle={toggle}
          onOpened={this.onOpened}
        />
        <DeleteModal
          {...this.props}
          menu={toDelete}
          isOpen={deleteIsOpen}
          toggle={this.toggleDelete}
          onChange={this.fetchMenuTypes}
        />
        <EditModal
          {...this.props}
          menu={toEdit}
          isOpen={editIsOpen}
          toggle={this.toggleEdit}
          onChange={this.fetchMenuTypes}
        />
      </div>
    );
  }
}

MenuTypes.propTypes = {
  setLoading: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
  toggle: PropTypes.func.isRequired,
};

export default MenuTypes;
