# SOLID PRINCIPLES

## 1. Single Responsibility Principle;
- Cada classe tem uma responsabilidade única;

---

## 2. Open/Closed Principle;
- As classses da Aplicação devem ser abertas para extensão mas fechas para modificação; 

---

## 3. Liskov Substitution Principle;
- Nós devemos poder substituir uma classe pai por uma herança dela e tudo continuar funcionando;

---

## 4. Interface Segregation Principle;
- Não devemos implementar classes pesadas para outras classes, apenas o necessário; 

- Exemplo errado:
    - class Impressora extends MegaImpressora {}

Nesse exemplo acima mostra que a classe "Impressora" está recebendo diversas funcionalidades da class "MegaImpressora", muitas delas que não são necessárias.

- Exemplo correto:
    - class Impressora extends Imprimir, Escanear, Digitalizar {}

Nesse exemplo acima mostra que a classe "Impressora" está recebendo as funcionalidades essênciais da class "MegaImpressora".

---

## 5. Dependency Inversion Principle;
- Classes de alto nível não devem depender de funcionalidades utilitárias de classes de baixo nível, mas classes de alto nível devem ser facilmente reutilizáveis;  

---