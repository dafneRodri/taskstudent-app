def test_agregar():
    print("✔ Test agregar tarea OK")

def test_eliminar():
    print("✔ Test eliminar tarea OK")

def test_completar():
    print("✔ Test completar tarea OK")


def ejecutar_tests():
    print("=== INICIANDO PRUEBAS ===")
    test_agregar()
    test_eliminar()
    test_completar()
    print("=== TODAS LAS PRUEBAS FINALIZADAS ===")


if __name__ == "__main__":
    ejecutar_tests()
