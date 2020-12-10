import React from "react";
import PropTypes from "prop-types";
import axios from "axios";
import Modal from "src/components/common/Modal";
import { Alert, Button, Input } from "reactstrap";
import { singleError } from "src/utils";
import { Async } from "react-select";
import _ from "lodash";

import "react-select/dist/react-select.css";
import "./styles.css";

class CreateModal extends React.Component {
  state = {
    quantity: 1,
    meals: [],
    menus: [],
    meal: {},
  };

  reset = () => {
    this.setState({
      ...this.state,
      meals: [],
      menus: [],
    });
    setTimeout(() => {
      this.setState({
        ...this.state,
        success: false,
        error: null,
      });
    }, 2000);
  };

  onOpened = () => {
    this.setState({
      ...this.state,
      error: null,
      success: false,
      menus: [],
      meals: [],
    });
  };

  onChange = (e) => {
    this.setState({
      ...this.state,
      [e.target.name]: e.target.value,
    });
  };

  fetchMenus = (input, callback) => {
    axios
      .get(`/menu`)
      .then(({ data }) => {
        console.log(data, "fetchMenus");
        // const x = {
        //   num_objects: 2,
        //   objects: [
        //     {
        //       id: 1,
        //       category: 1,
        //       created_at: "2020-04-30 13:00:32.257303",
        //       updated_at: "2020-04-30 13:00:32.257303",
        //     },
        //     {
        //       id: 2,
        //       category: 1,
        //       created_at: "2020-04-30 13:00:32.257303",
        //       updated_at: "2020-04-30 13:00:32.257303",
        //     },
        //   ],
        // };
        const menus = data.objects.map((menu) => {
          return {
            value: menu.id,
            label:
              menu.category === 1
                ? "Breakfast"
                : menu.category === 2
                ? "Lunch"
                : "Supper",
          };
        });
        callback(null, { options: menus });
        this.setState({
          menus: data.objects,
        });
      })
      .catch(({ response }) => {
        this.setState({
          ...this.state,
          error: response,
        });
        callback(response, null);
      });
  };

  fetchMeals = (input, callback) => {
    axios
      .get(`/meals`)
      .then(({ data }) => {
        const meals = data.objects.map((meal) => {
          return { value: meal.id, label: meal.name };
        });
        callback(null, { options: meals });
        this.setState({
          meals: data.objects,
        });
      })
      .catch(({ response }) => {
        this.setState({
          ...this.state,

          error: response,
        });
        callback(response, null);
      });
  };

  setSelectedMenu = (menu) => {
    this.setState({
      selectedMenu: menu,
    });
  };

  setSelectedMeal = (meal) => {
    this.setState({
      selectedMeal: meal,
    });
  };

  onCreate = () => {
    this.props.setLoading(true);

    const { selectedMeal, selectedMenu } = this.state;
    var x = {
      meal_id: 1,
      menu_id: 1,
    };

    const menuItem = {
      meal_id: selectedMeal.value ? selectedMeal.value : "",
      menu_id: selectedMenu.value ? selectedMenu.value : "",
      // quantity: this.state.quantity,
    };

    console.log(menuItem, "this is menuItem");

    axios
      .post("http://localhost:5000/api/v1/menu_items", menuItem)
      .then(({ data }) => {
        console.log(data, "Menu Item Create");
        this.props.onChange();
        this.setState({
          ...this.state,
          success: true,
          error: null,
        });
        this.reset();
        this.props.setLoading(false);
      })
      .catch(({ response }) => {
        this.setState({
          ...this.state,
          error: response,
          success: false,
        });
        this.reset();
        this.props.setLoading(false);
      });
  };

  render() {
    const { error, success } = this.state;
    const body = (
      <div>
        {success && (
          <Alert className="text-center text-small" color="success">
            Successfully added
          </Alert>
        )}
        {error && (
          <Alert className="text-center text-small" color="danger">
            {singleError(error)}
          </Alert>
        )}
        <div className="pl-4 pr-4">
          <label> Meal Name </label>
          <Async
            name="meal"
            value={this.state.selectedMeal}
            onChange={this.setSelectedMeal}
            loadOptions={_.throttle(this.fetchMeals, 500)}
            fitlerOptions={(options) => {
              return options;
            }}
          />
          <label className="mt-3"> Select Menu </label>
          <Async
            name="menu"
            value={this.state.selectedMenu}
            onChange={this.setSelectedMenu}
            loadOptions={_.throttle(this.fetchMenus, 500)}
            fitlerOptions={(options) => {
              return options;
            }}
          />
          <label className="mt-3">Quantity</label>
          <Input
            name="quantity"
            value={this.state.quantity}
            onChange={this.onChange}
            type="text"
          />
        </div>
      </div>
    );

    const footer = (
      <Button color="primary" className="m-auto" onClick={this.onCreate}>
        Save Item
      </Button>
    );
    const { isOpen, toggle } = this.props;
    return (
      <Modal
        title="Add Meal To A Menu"
        body={body}
        footer={footer}
        isOpen={isOpen}
        toggle={toggle}
        onOpened={this.onOpened}
      />
    );
  }
}

CreateModal.propTypes = {
  setLoading: PropTypes.func.isRequired,
  toggle: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  isOpen: PropTypes.bool,
};

export default CreateModal;
