require 'pg'
con = PG::Connection.new("localhost","5432","","","fullstack","postgres","admin")
puts con

var = con.exec("Select * from personas")
#ins = con.exec("INSERT INTO personas (nombre, apellido, cedula, telefono, estado) VALUES ('Diana','Sierra','4789',11111, true)")
puts var

class Crud
	require 'pg'
	
	def create(nombre, apellido, cedula, telefono, estado)
		con = PG::Connection.new("localhost","5432","","","fullstack","postgres","admin")
		sqlInsert = "INSERT INTO personas (nombre, apellido, cedula, telefono, estado) 
			VALUES ('" +nombre+"', '"+apellido+"', "+cedula+", "+telefono.to_s+", "+estado.to_s+")"
		# sqlInsert = "INSERT INTO personas (nombre, apellido, cedula, telefono, estado) 
		# VALUES ('Sebas','Botero','11',123,true)"
		#puts sqlInsert
		return con.exec(sqlInsert);
	end
	def read
		con.exec("SELECT * FROM personas")
	end
	def update(id_persona, nombre, apellido, cedula, telefono, estado)
		con = PG::Connection.new("localhost","5432","","","fullstack","postgres","admin")
		sqlUpdate = "UPDATE personas SET nombre = '"+nombre+"', apellido = '"+apellido+"', cedula = "+cedula+", telefono = "+telefono.to_s+
			", estado = "+estado.to_s+" WHERE id_persona = " + id_persona
		return con.exec(sqlUpdate);
	end
	def delete(id_persona)
		con = PG::Connection.new("localhost","5432","","","fullstack","postgres","admin")
		sqlDelete = "DELETE FROM personas WHERE id_persona = " + id_persona
		return con.exec(sqlDelete)
	end
end

crud = Crud.new
#crud.create('Sebas','Botero','7898',77777,true)
crud.update(5, 'Sebastian','Botero','7898',77777,true)
#crud.create('Sebas','Botero','7898',77777,true)
#crud.create('Sebas','Botero','7898',77777,true)
