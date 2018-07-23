require 'pg'

con = PG::Connection.new("localhost","5432","","","fullstack","postgres","admin")

class Crud
	require 'pg'
	
	def create(nombre, apellido, cedula, telefono, estado)
		con = PG::Connection.new("localhost","5432","","","fullstack","postgres","admin")
		sqlInsert = "INSERT INTO personas (nombre, apellido, cedula, telefono, estado) 
			VALUES ('" + nombre + "' 
			        , '" + apellido + "'
			        , '" + cedula + "'
			        , '" + telefono.to_s + "'
			        , '" + estado.to_s + "')"		
		return con.exec(sqlInsert);
	end	
	def read
		con = PG::Connection.new("localhost","5432","","","fullstack","postgres","admin")
		con.exec("SELECT * FROM personas")
	end
	def update(id_persona, nombre, apellido, cedula, telefono, estado)
		con = PG::Connection.new("localhost","5432","","","fullstack","postgres","admin")
		sqlUpdate = "UPDATE personas SET nombre = '" + nombre + 
		            "' , apellido = '" + apellido + 
		            "' , cedula = '" + cedula +
		            "' , telefono = '" + telefono.to_s +
		            "' , estado = '" + estado.to_s + 
		            "' WHERE id_persona = " + id_persona.to_s

		return con.exec(sqlUpdate);
	end
	def delete(id_persona)
		con = PG::Connection.new("localhost","5432","","","fullstack","postgres","admin")
		sqlDelete = "DELETE FROM personas WHERE id_persona = " + id_persona.to_s
		return con.exec(sqlDelete)
	end
end

crud = Crud.new
#crud.create('David','Ospina','1111',684258,true)
#crud.update(3, 'Sebastian','Botero','9874',1278,false)
#crud.read()
crud.delete(4)
