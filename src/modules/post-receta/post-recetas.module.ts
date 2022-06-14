import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ImagenRecetaRepository } from '../../core/repositories/imagen-receta.repository';
import { IngredienteRepository } from '../../core/repositories/ingrediente-receta.repository';
import { PasosRecetasRepository } from '../../core/repositories/pasos-recetas.repository';
import { PostRecetaRepository } from '../../core/repositories/PostRecetas.repository';
import { ImagenManagerService } from '../../core/services/imagen-manager.service';
import { Usuario } from '../../entities/Usuario';
import { PostRecetaController } from './post-receta.controller';
import { ImagenesPostService } from './services/imagenes-post.service';
import { PostRecetaService } from './services/postreceta.service';

@Module({
  imports: [TypeOrmModule.forFeature([
    PostRecetaRepository,
    IngredienteRepository,
    PasosRecetasRepository,
    ImagenRecetaRepository,
    Usuario
  ])],
  controllers: [PostRecetaController],
  providers: [PostRecetaService, ImagenesPostService, ImagenManagerService]
})
export class PostRecetasModule { }
