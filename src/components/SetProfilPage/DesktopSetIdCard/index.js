import React from 'react';
import { Link } from 'react-router-dom';
import { LabelDetail } from 'semantic-ui-react';
import { ButtonGroup } from 'semantic-ui-react';
import { Button, Divider, Grid, Header, Form, Icon, Input, Image, Label, Modal, Radio, Segment, TextArea } from 'semantic-ui-react';

const DesktopSetIdCard = ({
  email,
  password,
  pseudo,
  address,
  zipCode,
  city,
  firstName,
  lastName,
  holiday_mode
}) => {

  const [open, setOpen] = React.useState(false);

  return (
    
    <Segment className="desktopIdCard-MainWrapper">
      <Grid columns={2}>
        <Grid.Column className="desktopIdCard-leftPartWrapper">
            

          <div className="desktopIdCard-leftPartWrapper2elements">
          <Label className="desktopIdCard-leftPartWrapperLogin" attached='top left'>{pseudo}</Label>

            <Image className="desktopIdCard-leftPartWrapperImage"
                size="medium"
                label={{ as: 'a', color: 'red', corner: 'right', icon: 'camera' }}
                src="https://react.semantic-ui.com/images/avatar/large/steve.jpg"
            />

            <span className="desktopIdCard-holidayWrapper">
              <Label className="setProfilPage-fourthPartHolidayModeLabel">Mode vacances: </Label>
              <Radio size="medium" toggle />
            </span>
            
          </div>

            <Label className="desktopIdCard-bioLabel">
              <p className="desktopIdCard-bioP">Bio</p>
            </Label>


            <Form className="desktopIdCard-memberDescription">
                    <TextArea placeholder="Parle nous un peu de toi..." />
            </Form>

        </Grid.Column>

      <Grid.Column className="desktopIdCard-rightPartWrapper">
  
            <Label as='a' color='red' ribbon='right'>
                Mes infos
            </Label>

      <Form>
        <Form.Group widths='equal'>

            <Form.Input className="desktopIdCard-formInputName"
              icon='user'
              iconPosition='left'
              placeholder='Prénom'
              value={firstName}
            />

            <Form.Input className="desktopIdCard-formInputLastName"
              icon='user'
              iconPosition='left'
              placeholder='Nom'
              value={lastName}
            />
        </Form.Group>

            <Form.Input
              icon='map marker alternate'
              iconPosition='left'
              placeholder='Adresse'
              value={address}
            />

            <Form.Input
              placeholder='Code Postal'
              value={zipCode}
            />
                    
            <Form.Input
              placeholder='Ville'
              value={city}
            />

        <Form.Group widths='equal'>

            <Form.Input className="desktopIdCard-formInpuPassword"
              input='password'
              icon='lock'
              iconPosition='left'
              placeholder='Mot de passe'
              value={password}
            />

            <Form.Input className="desktopIdCard-formInpuConfirmPassword"
              input='password'
              icon='lock'
              iconPosition='left'
              placeholder='Confirmer mot de passe'
              value={password}
            />

        </Form.Group>

          <div>
              <Button className="desktopIdCard-EditEmail">Modifier mon email</Button>
          </div>

          <div className="desktopIdCard-Bottom3Buttons">
              <ButtonGroup widths='3' >
                    <Button icon='erase' color='black' />
                   
                    <Modal
                      Icon='user delete'
                      open={open}
                      trigger={<Button className="desktopIdCard-memberDelete" color='red'><Icon name='user delete'/></Button>}
                      onClose={() => setOpen(false)}
                      onOpen={() => setOpen(true)}
                    >
                    
                  <Header icon='delete' content='Confirmer votre action' />
                    <Modal.Content>
                        <p>
                          Voulez-vous vraiment supprimer votre compte ?
                        </p>
                    </Modal.Content>
                    <Modal.Actions>
                        <Button color='red' onClick={() => setOpen(false)}>
                            <Icon name='remove' /> Non
                        </Button>
                        <Button color='green' onClick={() => setOpen(false)}>
                            <Icon name='checkmark' /> Oui
                        </Button>
                    </Modal.Actions>
                    </Modal>

                    <Button icon='save' color='green' />
              </ButtonGroup>
            </div>
          </Form>
        </Grid.Column>
    </Grid>

  </Segment>        

  );
}

export default DesktopSetIdCard;
