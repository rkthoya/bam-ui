import React from "react";
import PropTypes from "prop-types";
import Paginator from "src/components/common/Paginator";
import { paginationInfo } from "src/utils";

import Table from "src/components/common/Table";
import { EntryType } from "src/constants";

class MealsTable extends React.Component {
  render() {
    const { objects } = this.props.data;
    const tableData = {
      columns: [
        { key: "id", title: "ID", type: EntryType.NUMBER },
        { key: "img_url", title: "Image", type: EntryType.IMAGE },
        { key: "name", title: "Name", type: EntryType.TEXT },
        { key: "cost", title: "Cost", type: EntryType.NUMBER },
        { key: "created_at", title: "Created On", type: EntryType.DATE },
      ],
      rows: objects ? objects : [],
    };
    const pageInfo = paginationInfo(this.props.data);
    const { toggleEdit, toggleDelete } = this.props;
    return (
      <div>
        {/* <Table data={tableData} onEdit={toggleEdit} onDelete={toggleDelete} /> */}

        <div className="table-holder" style={{ maxHeight: "350px" }}>
          <table className="table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Image</th>

                <th>Name</th>
                <th>Cost</th>
                <th>Created On</th>
                <th>Edit</th>

                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {objects
                ? objects.map((menu) => (
                    <tr key={menu.id}>
                      <td>{menu.id}</td>
                      <td></td>

                      <td>{menu.name}</td>
                      <td>{menu.cost}</td>
                      <td>{menu.created_at}</td>

                      <td>
                        <button
                          onClick={() => toggleEdit(menu.id)}
                          className="edit-act"
                        >
                          Edit
                        </button>
                      </td>
                      <td>
                        <button
                          onClick={() => toggleDelete(menu.id)}
                          className="delete-act"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))
                : ""}
            </tbody>
          </table>
          <Paginator {...this.props} pageInfo={pageInfo} />
        </div>
      </div>
    );
  }
}

MealsTable.propTypes = {
  data: PropTypes.object.isRequired,
};

export default MealsTable;
