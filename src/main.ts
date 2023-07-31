
import { NestFactory } from "@nestjs/core";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";
import { AppModule } from "./app.module";

async function start() {
    const PORT =+(process.env.PORT) || 3000 ;
    const app = await NestFactory.create(AppModule);

    const config = new DocumentBuilder()
        .setTitle('nest task')
        .setDescription('documentation REST API')
        .setVersion('1.0.0')
        .addTag('Arman')
        .build()
        const document = SwaggerModule.createDocument(app,config);
        SwaggerModule.setup('/api/docs', app,document)
    await  app.listen(PORT,()=>console.log(`port running :${PORT}`));
    
    
}
start()