#------------------------------------------------------------
#        Script MySQL.
#------------------------------------------------------------


#------------------------------------------------------------
# Table: User
#------------------------------------------------------------

CREATE TABLE User(
        id_user         Int  Auto_increment  NOT NULL ,
        last_name_user  Varchar (50) NOT NULL ,
        first_name_user Varchar (50) NOT NULL ,
        email_user      Varchar (50) NOT NULL ,
        password_user   Varchar (50) NOT NULL
	,CONSTRAINT User_PK PRIMARY KEY (id_user)
)ENGINE=InnoDB;


#------------------------------------------------------------
# Table: Project
#------------------------------------------------------------

CREATE TABLE Project(
        id_project   Int  Auto_increment  NOT NULL ,
        name_project Varchar (50) NOT NULL ,
        date_project Date NOT NULL ,
        id_user      Int NOT NULL
	,CONSTRAINT Project_PK PRIMARY KEY (id_project)

	,CONSTRAINT Project_User_FK FOREIGN KEY (id_user) REFERENCES User(id_user)
)ENGINE=InnoDB;


#------------------------------------------------------------
# Table: Task
#------------------------------------------------------------

CREATE TABLE Task(
        id_task          Int  Auto_increment  NOT NULL ,
        title_task       Varchar (100) NOT NULL ,
        description_task Varchar (1000) NOT NULL ,
        priority_task    Int NOT NULL ,
        deadline_task    Date NOT NULL ,
        achieved_task    Bool NOT NULL ,
        id_project       Int NOT NULL
	,CONSTRAINT Task_PK PRIMARY KEY (id_task)

	,CONSTRAINT Task_Project_FK FOREIGN KEY (id_project) REFERENCES Project(id_project)
)ENGINE=InnoDB;

