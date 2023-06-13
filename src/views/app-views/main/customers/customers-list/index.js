import React, { Component } from 'react';
import { Card, Table, Tooltip, message, Button, Spin } from 'antd';
import { EyeOutlined, DeleteOutlined, UserOutlined } from '@ant-design/icons';
import AvatarStatus from 'components/shared-components/AvatarStatus';
import { sort } from '../model/helpers/sort';
import { withRouter } from 'react-router-dom';

export class CustomersList extends Component {
  state = {
    customers: this.props.customers,
    isPending: this.props.isPending,
    error: this.props.fetchError,
  };

  deleteCustomer = (customerId) => {
    this.setState({
      customers: this.state.customers.filter((item) => item.id !== customerId),
    });
    message.success({ content: `Deleted customer ${customerId}`, duration: 2 });
  };

  showCustomerProfile = ( customerInfo ) => {
    this.props.history.push(`/app/main/customers/edit-customer/${customerInfo.id}`, {id: customerInfo.id});
  };

  render() {
    const { customers, isPending } = this.state;

    const tableColumns = [
      {
        title: "Customer",
        dataIndex: "name",
        render: (_, record) => (
          <div className="d-flex">
            <AvatarStatus
              icon={<UserOutlined />}
              name={record.name}
              subTitle={record.email}
            />
          </div>
        ),
        sorter: {
          compare: (a, b) => sort(a, b, "name"),
        },
      },
      {
        title: "Phone",
        dataIndex: "phone",
      },
      {
        title: "Website",
        dataIndex: "website",
        sorter: {
          compare: (a, b) => sort(a, b, "website"),
        },
      },
      {
        title: "Company",
        dataIndex: ["company", "name"],
        sorter: {
          compare: (a, b) => sort(a, b, 'company.name'),
        },
      },
      {
        title: "Address",
        dataIndex: ["address", "street"],
        sorter: {
          compare: (a, b) => sort(a, b, "address.street"),
        },
      },
      {
        title: "",
        dataIndex: "actions",
        render: (_, elm) => (
          <div className="text-right">
            <Tooltip title="View">
              <Button
                type="primary"
                className="mr-2"
                icon={<EyeOutlined />}
                onClick={() => {
                  this.showCustomerProfile(elm);
                }}
                size="small"
              />
            </Tooltip>
            <Tooltip title="Delete">
              <Button
                danger
                icon={<DeleteOutlined />}
                onClick={() => {
                  this.deleteCustomer(elm.id);
                }}
                size="small"
              />
            </Tooltip>
          </div>
        ),
      },
    ];
    return (
      <Card bodyStyle={{ padding: "0px" }}>
        <Spin spinning={isPending} tip='Loading'>
          <Table columns={tableColumns} dataSource={customers} rowKey="id" />
        </Spin>
      </Card>
    );
  }
}

export default withRouter(CustomersList);
