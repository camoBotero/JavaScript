#puts ("hola mundo")
#num1 = 6
# num2 = 3
# puts num1 + num2
# puts num1 - num2
#puts num1 * num2
#puts num1 / num2

#var1 = "5.2"
#var2 = "3"

#puts var1.to_f
#puts var2.to_i

# puts "cual es tu nombre"
# #nom = gets
# puts "tu nombre es " + gets

# puts "cual es tu edad"
# edad = gets;
# if edad.to_i > 18 && edad.to_i <= 50
# 	puts "Mayor de 18";
# elsif edad.to_i > 50
# 	puts "estás muy viejo";
# else
# 	puts "eres muy joven";
# end

# i = 0
# while i < 10
# 	puts i
# 	i = i+1
# end

# comando = ''
# while comando != 'adios'
# 	puts "dime algo"
# 	comando = gets.chomp
# end

# lenguajes = ['Ingles', 'Aleman', 'Español']
# lenguajes.each do |leng|
# 	puts "Me gusta el " + leng + "!"
# 	puts "¿A ti?"
# end

def getmethod miParametro
	puts miParametro
end
getmethod "Camilo"

def sumar(num1, num2)
	puts num1 + num2
end
sumar(2,3)

def metodo(nombre, apellido, edad)
	puts nombre
	puts apellido
	puts edad
end

metodo("Camilo", "Botero", "30")

def carro modelo="dubai"
	puts modelo
end;

carro
carro("VolksWagen")

class Dado
	def initialize numero
		puts numero
	end
	def rodar
		@numeroMostrado = 1 + rand(6)
	end
	def mostrar
		@numeroMostrado
	end
end

dado = Dado.new(18)
dado.rodar
puts dado.mostrar