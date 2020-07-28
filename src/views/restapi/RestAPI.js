/*
 * FeaturePage
 *
 * List all the features
 */
import React, { Component, useState, useEffect } from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { Redirect } from "react-router-dom";
import {
  handleGetAll,
  handlePost,
  handleDelete,
} from "../../actions/apiActions";

import {
  CButton,
  CCard,
  CCardBody,
  CCardFooter,
  CCardHeader,
  CCol,
  CForm,
  CFormGroup,
  CFormText,
  CInput,
  CListGroup,
  CListGroupItem,
  CLabel,
  CInputGroupPrepend,
  CRow,
} from "@coreui/react";
import CIcon from "@coreui/icons-react";

const Categories = (props) => {
  const { categories } = props;
  const [activeTab, setActiveTab] = useState(1);

  // const contacts = [
  //   {
  //     id: "1",
  //     name: "cenas1",
  //   },
  //   {
  //     id: "2",
  //     name: "cenas2",
  //   },
  // ];

  return (
    <div>
      <CCard className="cardContainer">
        <CCardBody>
          <CCol xs="12" md="9">
            <CListGroup id="list-tab" role="tablist">
              {categories.map((category) => (
                <div key={category.id}>
                  <CListGroupItem
                    onClick={() => setActiveTab(category.id)}
                    action
                    active={activeTab === category.id}
                  >
                    {" "}
                    {category.id} {category.name}
                    <CButton
                      className="float-right"
                      type="button"
                      color="danger"
                    >
                      <CIcon name="cil-ban" />
                    </CButton>
                  </CListGroupItem>
                </div>
              ))}
            </CListGroup>
          </CCol>
        </CCardBody>
      </CCard>
    </div>
  );
};

class Items extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categoryId: "",
      categoryName: "",
      productId: "",
      productName: "",
      productPrice: "",
    };
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  GetAll = (e) => {
    e.preventDefault();
    const items = this.props.handleGetAll(e);
  };

  testGetAll = (e) => {
    e.preventDefault();
    const msg = this.props.handletestGetAll(e);
  };

  Post = (e) => {
    e.preventDefault();
    this.props.handlePost(this.state.category);
  };

  handleInputChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  componentDidMount() {
    // this.setState({ contacts: this.GetAll() });
  }

  render() {
    const { authError, auth } = this.props;

    if (!auth.uid) {
      return <Redirect to="/signin" />;
    }

    const categories = [
      {
        id: "2",
        name: "cenas2",
      },
      {
        id: "3",
        name: "cenas3",
      },
    ];

    //   const categories = [
    //   {
    //     id: "2",
    //     name: "cenas2",
    //   },
    //   {
    //     id: "3",
    //     name: "cenas3",
    //   },
    // ];

    // Categories

    // Products
    // const [productId, setProductId] = useState("");
    // const [productName, setProductName] = useState("");
    // const [productPrice, setProductPrice] = useState("");
    // const [newName, setNewProductName] = useState("");

    // Clear form
    const handleClearProduct = () => {
      // setProductId("");
      // setProductName("");
      // setProductPrice("");
    };

    return (
      <>
        <CRow>
          <CCol xs="12" md="6">
            <CCard>
              <CCardHeader>
                Add
                <small> Categories</small>
              </CCardHeader>
              <CCardBody>
                <CForm
                  action=""
                  method="post"
                  encType="multipart/form-data"
                  className="form-horizontal"
                >
                  <CFormGroup row>
                    <CCol md="3">
                      <CLabel htmlFor="text-input">Id</CLabel>
                    </CCol>
                    <CCol xs="12" md="9">
                      <CInput
                        name="categoryId"
                        placeholder="id"
                        value={this.state.id}
                        onChange={this.handleInputChange}
                      />
                      <CFormText>Please enter your category ID</CFormText>
                    </CCol>
                  </CFormGroup>
                  <CFormGroup row>
                    <CCol md="3">
                      <CLabel htmlFor="email-input">Name</CLabel>
                    </CCol>
                    <CCol xs="12" md="9">
                      <CInput
                        name="categoryName"
                        placeholder="i.e Groceries"
                        value={this.state.name}
                        onChange={this.handleInputChange}
                      />
                      <CFormText className="help-block">
                        Please enter your category name
                      </CFormText>
                    </CCol>
                  </CFormGroup>
                </CForm>
              </CCardBody>
              <CCardFooter>
                <CButton
                  type="add"
                  size="sm"
                  color="primary"
                  onClick={this.Post}
                >
                  <CIcon name="cil-scrubber" /> Add
                </CButton>
                <CButton
                  type="reset"
                  size="sm"
                  color="danger"
                  //onClick={this.handleInputChange}
                >
                  <CIcon name="cil-ban" /> Reset
                </CButton>
              </CCardFooter>
            </CCard>

            <div className="ItemsList">
              <Categories categories={categories} />
            </div>
          </CCol>

          {/* Add Products */}
          <CCol xs="12" md="6">
            <CCard>
              <CCardHeader>
                Add
                <small> Products</small>
              </CCardHeader>
              <CCardBody>
                <CForm
                  action=""
                  method="post"
                  encType="multipart/form-data"
                  className="form-horizontal"
                >
                  <CFormGroup row>
                    <CCol md="3">
                      <CLabel>Selected Category</CLabel>
                    </CCol>
                    <CCol xs="12" md="9">
                      <CLabel>Selected</CLabel>
                    </CCol>
                  </CFormGroup>
                  <CFormGroup row>
                    <CCol md="3">
                      <CLabel htmlFor="text-input">Id</CLabel>
                    </CCol>
                    <CCol xs="12" md="9">
                      <CInput
                        name="productId"
                        placeholder="Id"
                        value={this.state.productId}
                        onChange={this.handleInputChange}
                      />
                      <CFormText>Please enter your Product Id</CFormText>
                    </CCol>
                  </CFormGroup>
                  <CFormGroup row>
                    <CCol md="3">
                      <CLabel htmlFor="email-input">Name</CLabel>
                    </CCol>
                    <CCol xs="12" md="9">
                      <CInput
                        name="productName"
                        placeholder="i.e Potatoes"
                        value={this.state.productName}
                        onChange={this.handleInputChange}
                      />
                      <CFormText className="help-block">
                        Please enter your Product Name
                      </CFormText>
                    </CCol>
                  </CFormGroup>
                  <CFormGroup row>
                    <CCol md="3">
                      <CLabel htmlFor="email-input">Price</CLabel>
                    </CCol>
                    <CCol xs="12" md="9">
                      <CInput
                        name="productPrice"
                        placeholder="£0.0"
                        value={this.state.productPrice}
                        onChange={this.handleInputChange}
                      />
                      <CFormText className="help-block">
                        Please enter your Product Price
                      </CFormText>
                    </CCol>
                  </CFormGroup>
                </CForm>
              </CCardBody>
              <CCardFooter>
                <CButton
                  type="add"
                  size="sm"
                  color="primary"
                  onClick={this.Post}
                >
                  <CIcon name="cil-scrubber" /> Add
                </CButton>
                <CButton
                  type="reset"
                  size="sm"
                  color="danger"
                  onClick={handleClearProduct}
                >
                  <CIcon name="cil-ban" /> Reset
                </CButton>
              </CCardFooter>
            </CCard>
          </CCol>
        </CRow>

        <CButton type="reset" size="sm" color="danger" onClick={this.Post}>
          <CIcon name="cil-ban" /> Reset
        </CButton>
      </>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    authError: state.auth.authError,
    auth: state.firebase.auth,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleGetAll: () => dispatch(handleGetAll()),
    handlePost: (category) => dispatch(handlePost(category)),
    handleDelete: () => dispatch(handleDelete()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Items);
