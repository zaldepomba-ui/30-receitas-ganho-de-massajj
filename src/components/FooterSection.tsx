const FooterSection = () => {
  return (
    <footer className="py-10 border-t border-border">
      <div className="container text-center">
        <p className="font-body text-sm text-muted-foreground">
          © {new Date().getFullYear()} 30 Receitas para Ganhar Massa. Todos os direitos reservados.
        </p>
        <p className="font-body text-xs text-muted-foreground mt-2">
          Este produto é apenas para fins informativos e não substitui orientação nutricional profissional.
        </p>
      </div>
    </footer>
  );
};

export default FooterSection;
