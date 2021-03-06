import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import {Card, CardContent} from '@material-ui/core';
import {
    Form,
    Input,
    Alert,
    CardBody,
    Col,
    Row,
  } from 'reactstrap';
  import DataTable from 'react-data-table-component';
  import {url} from 'axios/url';
  import Spinner from 'react-bootstrap/Spinner';

const useStyles = makeStyles(theme => ({
    root: {
        margin: 'auto',
      },
      paper: {
        width: 200,
        height: 230,
        overflow: 'auto',
      },
      button: {
        margin: theme.spacing(0.5, 0),
      },
    root2: {
      flexGrow: 1,
      width: '100%',
      backgroundColor: theme.palette.background.paper,
      margin:theme.spacing(7),
      bullet: {
          display: 'inline-block',
          margin: '0 2px',
          transform: 'scale(0.8)',
        },
        title: {
          fontSize: 12,
            
        },
        pos: {
          fontSize: 11,
        },
      cardContent:{
          padding: 2,
      },
      cardroot:{
          margin:theme.spacing(1),
          height: 250 + 'px !important' ,
      },
      center:{
        textAlign: 'center'
      }
      
      },
      
      }));
   
const cardStyle = {
        borderColor: '#fff',
        marginBottom: 10,
        height: 600,
        overflow: 'auto',
    };

export default function ConsultationPage(props) {
   
   const PatientID = 1;
   const visitId = 2;
   const saveTestUrl = url+"encounters/GENERAL_SERVICE/LABTEST_ORDER_FORM/"+PatientID; 

    const classes = useStyles();
    const [showLoading, setShowLoading] = useState(false);  
    const [message, setMessage] = useState('');
    const [serviceForms, setServiceForms] = useState([]);
    const [filterText, setFilterText] = React.useState('');
    const [resetPaginationToggle, setResetPaginationToggle] = React.useState(false);
    const filteredItems = serviceForms.filter(
      item => (item.displayName && item.displayName.toLowerCase().includes(filterText.toLowerCase()))
      || (item.lastName && item.lastName.toLowerCase().includes(filterText.toLowerCase()))
      || (item.hospitalNumber && item.hospitalNumber.toLowerCase().includes(filterText.toLowerCase())));
    
  useEffect(() => {
    async function fetchServiceForms() {
      setShowLoading(true);
        try{
      const response = await fetch(url+'forms/all');
      const body = await response.json();
      console.log(body);         
     setServiceForms(body);
     setShowLoading(false);
      }catch(error){
          console.log(error);
          setMessage("Could not fetch available service forms. Please try again later");
          setShowLoading(false);
      }
    }
    fetchServiceForms();
  }, []);

  const FilterComponent = ({ filterText, onFilter, onClear }) => (
    <Form  className="cr-search-form" onSubmit={e => e.preventDefault()} >
          <Card>
              <CardContent>
                    <Input
                      type="search"
                      placeholder="Search by Form Name "
                      className="cr-search-form__input pull-right"
                      value={filterText} onChange={onFilter}
                    />
              </CardContent>
          </Card>
      </Form>
  );

  const openServiceForm = () => {
    console.log('clicked');
  };

  const columns = [
    {
      name: 'Service Form',
      selector: 'displayName',
      sortable: false,
    },{
      cell: () =>  <IconButton color="primary" fontSize="small"><AddCircleOutlineIcon /></IconButton>      ,
      ignoreRowClick: true,
      allowOverflow: true,
      button: true,
    },
  ];

  const subHeaderComponentMemo = React.useMemo(() => {
    const handleClear = () => {
      if (filterText) {
        setResetPaginationToggle(!resetPaginationToggle);
        setFilterText('');
      }
    };

    return <FilterComponent onFilter={e => setFilterText(e.target.value)} onClear={handleClear} filterText={filterText} />;
  }, [filterText, resetPaginationToggle]);

return (
  <Row>
                <Col lg={5} >
                  <Card  style={cardStyle} className=" p-3">
                    <CardBody>
                        <Typography className={classes.title} color="primary" gutterBottom>
                                      Available Service Forms
                        </Typography>
                        {message ? 
                        <Alert color="primary">
                          {message}
                        </Alert> : ""
                         }
                        {
                          showLoading ? 
                          <div style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>
                        <span>  Fetching Service Forms &nbsp; </span> <Spinner animation="border" role="status" >
                          <span className="sr-only"></span>
                          </Spinner></div>
                          : ""
                        }
{ serviceForms.length > 0 ? 
<div>
    <DataTable
      columns={columns}
      data={filteredItems}
      pagination
      paginationResetDefaultPage={resetPaginationToggle} 
      subHeader
      subHeaderComponent={subHeaderComponentMemo}
      highlightOnHover={true}
      subHeaderAlign={'left'}
      noTableHead={true}
      noHeader={true}
    />

</div> : ""}

                        </CardBody>
                        </Card>
                        </Col>

                        <Col lg={7}>
                        <Card  style={cardStyle} className=" p-3">
                    <CardBody>
                        <Typography className={classes.title} color="primary" gutterBottom>
                                      Service Forms History
                        </Typography>
                        </CardBody>
                        </Card>
                        </Col>
                        </Row>
)
}