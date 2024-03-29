<?php

namespace Lit\Config\Crud;

use App\Models\Reference;
use App\Models\Service;
use App\Models\TeamMember;
use Ignite\Crud\Config\CrudConfig;
use Ignite\Crud\CrudIndex;
use Ignite\Crud\CrudShow;
use Illuminate\Support\Str;
use Lit\Http\Controllers\Crud\ServiceController;
use Litstack\Deeplable\TranslateAction;
use Litstack\Meta\Traits\FormHasMeta;

class ServiceConfig extends CrudConfig
{
    use FormHasMeta;

    /**
     * Model class.
     *
     * @var string
     */
    public $model = Service::class;

    /**
     * Controller class.
     *
     * @var string
     */
    public $controller = ServiceController::class;

    /**
     * Model singular and plural name.
     *
     * @param Service|null service
     * @return array
     */
    public function names(Service $service = null)
    {
        return [
            'singular' => 'Leistung',
            'plural'   => 'Leistungen',
        ];
    }

    /**
     * Get crud route prefix.
     *
     * @return string
     */
    public function routePrefix()
    {
        return 'services';
    }

    /**
     * Build index page.
     *
     * @param  \Ignite\Crud\CrudIndex  $page
     * @return void
     */
    public function index(CrudIndex $page)
    {
        $page->table(function ($table) {
            $table->col('Title')->value('{title}')->sortBy('title');
        })->search('title')->perPage(20);
    }

    /**
     * Setup show page.
     *
     * @param  \Ignite\Crud\CrudShow  $page
     * @return void
     */
    public function show(CrudShow $page)
    {
        $page->headerRight()
        ->action('Übersetzen', TranslateAction::class)
        ->variant('primary');

        $page->info('Content')
        ->width(3);
        $page->card(function ($form) {
            $form->input('title')->width(9);
            $form->boolean('active')->width(3);
            $form->textarea('svg');
            $form->textarea('excerpt')->width(12);
            $form->wysiwyg('text')->width(12);
            $form->input('list_title')->width(9);
            $form->wysiwyg('list')->width(8);
        })->width(9);

        $page->info('Kontakt')
        ->width(3);
        $page->card(function ($form) {
            $form->relation('team_member')
                ->title('Ansprechpartner')
                ->preview(function ($table) {
                    $table->image('Image')
                        ->src('{image.conversion_urls.sm}')
                        ->maxWidth('50px')
                        ->small();
                    $table->col('Name')
                        ->value('{name}')
                        ->sortBy('name');
                });
        })->width(9);

        $page->info('Referenzen')
        ->width(3);
        $page->card(function ($form) {
            $form->manyRelation('references')
                ->title('Referenzen')
                ->model(Reference::class)
                ->sortable()
                ->preview(function ($table) {
                    $table->image('Image')
                        ->src('{image.conversion_urls.sm}')
                        ->maxWidth('50px')
                        ->small();

                    $table->col('Title')
                        ->value('{title}')
                        ->sortBy('title');
                });
        })->width(9);

        $page->onlyOnUpdate(function ($page) {
            $page->info('SEO')
                ->width(3);
            $page->card(function ($form) {
                $form->seo();
            })->width(9);
        });
    }
}
