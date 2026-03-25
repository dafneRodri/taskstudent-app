# Simulación de pruebas de la app de tareas

tareas = []

def agregar(texto):
    if texto.strip() == "":
        return False
    tareas.append({"texto": texto, "hecho": False})
    return True

def completar(index):
    if index < len(tareas):
        tareas[index]["hecho"] = True
        return True
    return False

def eliminar(index):
    if index < len(tareas):
        tareas.pop(index)
        return True
    return False


#   Pruebas

print("---- INICIANDO TEST ----")

# Test 1: agregar tarea válida
resultado = agregar("Estudiar")
print("Agregar tarea:", "OK" if resultado else "FAIL")

# Test 2: agregar tarea vacía
resultado = agregar("")
print("No permitir vacío:", "OK" if not resultado else "FAIL")

# Test 3: completar tarea
resultado = completar(0)
print("Completar tarea:", "OK" if resultado and tareas[0]["hecho"] else "FAIL")

# Test 4: eliminar tarea
resultado = eliminar(0)
print("Eliminar tarea:", "OK" if resultado and len(tareas) == 0 else "FAIL")

print("---- FIN DEL TEST ----")
